from flask import Flask;
import pandas as pd;
import json
# from flask.helpers import send_from_directory
# from bs4 import BeautifulSoup;
# from urllib.request import urlopen;
# from flask_cors import CORS, cross_origin

# setting app flask backend
app = Flask(__name__)

# route for companies list
@app.route("/companies_list",methods={"GET"})
def companies_list():

    # I downlaoded the CSV instead of quering the UK government to limit my costs while i develop my skills

    # getting data from the UK website
    # website = urlopen("https://www.gov.uk/government/publications/register-of-licensed-sponsors-workers").read()
    # soup = BeautifulSoup(website,"html.parser")
    # csv_link = soup.find(id="documents").a["href"]

    # reading data
    # data = pd.read_csv(csv_link)

    data = pd.read_csv("2024-05-10_-_Worker_and_Temporary_Worker.csv")
    data_str = data.to_json(orient="index")
    data_json = json.loads(data_str)

    return data_json 

if __name__ == "__main__":
    app.run(debug=True)
