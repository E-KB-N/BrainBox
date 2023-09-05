# import pandas as pd
import pandas as pd

# Read data from the CSV file
df = pd.read_csv("files/BSc. IT c4reer p4ths - Sheet1.csv")
hg = pd.read_csv("files/BSc IT Course Paths - Sheet1.csv")

# Print the DataFrame
df.isnull().sum()
hg.isnull().sum()