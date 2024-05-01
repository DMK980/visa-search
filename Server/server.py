from flask import Flask;
from bs4 import BeautifulSoup;
from urllib.request import urlopen;
import pandas as pd;
import json
from flask_cors import CORS

# setting app flask backend
app = Flask(__name__)
cors = CORS(app, origins="*")

# getting data from the UK website
website = urlopen("https://www.gov.uk/government/publications/register-of-licensed-sponsors-workers").read()
soup = BeautifulSoup(website,"html.parser")
csv_link = soup.find(id="documents").a["href"]

# reading data
data = pd.read_csv(csv_link)
data_str = data.to_json(orient="index")
data_json = json.loads(data_str)


# route for companies list
@app.route("/companies_list",methods={"GET"})
def companies_list():
    return data_json

if __name__ == "__main__":
    app.run(debug=True)
