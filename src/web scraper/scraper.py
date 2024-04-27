from bs4 import BeautifulSoup;
from urllib.request import urlopen;
import csv;
import json;

# getting data from the UK website
website = urlopen("https://www.gov.uk/government/publications/register-of-licensed-sponsors-workers").read()
soup = BeautifulSoup(website,"html.parser")
csv_link = soup.find(id="documents").a["href"]

# reading data
download = urlopen(csv_link).read().decode("UTF-8").split("\r\n")
download.pop()














