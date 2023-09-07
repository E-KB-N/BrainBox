import pandas as pd
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import string
import re

def preprocess_text(text):
    # Convert text to lowercase
    text = text.lower()

    # Remove punctuation
    translator = str.maketrans("", "", string.punctuation)
    text = text.translate(translator)

    # Tokenize the text into individual words
    words = word_tokenize(text)

    # Remove stopwords
    stop_words = set(stopwords.words("english"))
    filtered_words = [word for word in words if word not in stop_words]

    # Join the words back into a sentence
    processed_text = " ".join(filtered_words)

    return processed_text

def load_data():
    # Step 1: Load data from CSV files into DataFrames and preprocess text data
    nltk.download("punkt")
    nltk.download("stopwords")

    careers_df = pd.read_csv("static/files/BSc. IT c4reer p4ths - Sheet1.csv")
    careers_df["Job Description"] = careers_df["Job Description"].apply(preprocess_text)

    courses_df = pd.read_csv("static/files/BSc IT Course Paths - Sheet1.csv")
    courses_df["Course Description"] = courses_df["Course Description"].apply(preprocess_text)

    return careers_df, courses_df

def prompt_with_options(options, prompt_text):
    while True:
        user_input = input(prompt_text)
        if user_input.strip() in options:
            return user_input.strip()
        print("Invalid input. Available options:", ", ".join(options))

def ask_for_student_information(careers_df, courses_df):
    # Step 3: Ask students for their information
    valid_levels = [100, 200, 300, 400]

    level = input("Enter your levels (100, 200, 300, or 400): ")

    while not level.isdigit() or int(level) not in valid_levels:
        print("Invalid level. Please enter a valid level (100, 200, 300, or 400).")
        level = input("Enter your level (100, 200, 300, or 400): ")

    level = int(level)

    degree_program = input("Enter your degree program (BSc. Information Technology): ")

    # Display available career choices from the DataFrame
    available_career_choices = careers_df["Career Path"].unique()
    print("Available career choices:")
    print(", ".join(available_career_choices))

    career_choice = prompt_with_options(available_career_choices, "Enter the career you want to pursue: ")

    # Display available interests from the DataFrame
    all_interests = set()
    for interests in courses_df["Interests"].str.split(", "):
        all_interests.update(interests)

    print("Available interests:")
    print(", ".join(all_interests))

    while True:
        interest_input = input("Enter your interests (comma-separated): ")
        selected_interests = [interest.strip() for interest in interest_input.split(",") if interest.strip()]

        # Check if there are selected interests
        if not selected_interests:
            print("No interests provided. Please enter your interests.")
        else:
            # Check if all selected interests are valid
            invalid_interests = [interest for interest in selected_interests if interest not in all_interests]

            if invalid_interests:
                print("Invalid interests:", ", ".join(invalid_interests))
            else:
                break

    return level, degree_program, career_choice, selected_interests

def find_most_similar_careers(careers_df, career_choice, tfidf_vectorizer):
    # Step 4: Use cosine similarity to find the most similar careers
    tfidf_matrix = tfidf_vectorizer.fit_transform(careers_df["Job Description"])
    career_similarity_scores = cosine_similarity(tfidf_matrix)

    # Find the index of the most similar career
    career_index = careers_df[careers_df["Career Path"].str.contains(career_choice, case=False)].index[0]
    similar_careers_scores = career_similarity_scores[career_index]
    most_similar_career_indices = similar_careers_scores.argsort()[-3:-1][::-1]
    recommended_careers = careers_df.loc[most_similar_career_indices, "Career Path"].tolist()

    return recommended_careers

def find_most_similar_interests(selected_interests, all_interests, tfidf_vectorizer):
    # Step 5: Find the most similar interests based on cosine similarity
    def tokenize_and_lowercase(text):
        return word_tokenize(text.lower())

    selected_interests = [tokenize_and_lowercase(interest) for interest in selected_interests]
    all_interests = [tokenize_and_lowercase(interest) for interest in all_interests]

    similar_interests = set()
    for selected_interest in selected_interests:
        for interest in all_interests:
            similarity = cosine_similarity(tfidf_vectorizer.transform([" ".join(selected_interest)]),
                                           tfidf_vectorizer.transform([" ".join(interest)]))[0][0]
            if similarity > 0.5:  # Use a threshold to determine similarity
                similar_interests.add(" ".join(interest))
    return list(similar_interests)

def recommend_elective_courses(careers_df, selected_career):
    # Step 6: Recommend elective courses based on the selected career
    recommended_courses = careers_df[careers_df["Career Path"].str.contains(selected_career, case=False)]["Recommended Elective Courses"].tolist()
    return recommended_courses

def main(career_choice,selected_interests):
    careers_df, courses_df = load_data()
    # level, degree_program, career_choice, selected_interests = ask_for_student_information(careers_df, courses_df)

    tfidf_vectorizer = TfidfVectorizer()
    
    # Step 4: Find most similar careers
    recommended_careers = find_most_similar_careers(careers_df, career_choice, tfidf_vectorizer)

    # Step 5: Find most similar interests
    most_similar_interests = find_most_similar_interests(selected_interests, courses_df["Interests"], tfidf_vectorizer)

    # Step 6: Recommend elective courses
    if not selected_interests:
        return "No interests provided. Please enter your interests."
    elif not recommended_careers:
        return"No similar careers found. Please try with a different career choice."
    else:
        print("Selected Career: ", career_choice)
        print("Recommended Elective Courses:")
        for career in recommended_careers:
            recommended_courses = recommend_elective_courses(careers_df, career)
            if recommended_courses:
                print("For", career, ": ", recommended_courses)
            else:
                print("No elective courses found for", career)
            return recommended_courses
if __name__ == "__main__":
    main()
