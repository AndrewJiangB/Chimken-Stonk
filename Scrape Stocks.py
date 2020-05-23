from selenium import webdriver
from bs4 import BeautifulSoup

driver = webdriver.Chrome("C:\\Users\\owner\\Documents\\Projects\\Chimken Stonk\\chromedriver_win32\\chromedriver.exe")
driver.get("https://www.bloomberg.com/markets/stocks")

content = driver.page_source
soup = BeautifulSoup(content, features="html.parser")
for a in soup.findAll('a',href=True, attrs={'class':'data-table-body'}):
    name=a.find('div', attrs={'data-type':'name'})
    value=a.find('div', attrs={'data-type':'value'})
    print(name)
    print(value)
