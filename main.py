import os
from fastapi import FastAPI, Query
from fastapi.responses import FileResponse, HTMLResponse
from fastapi.staticfiles import StaticFiles

import requests, json

##from airwater import run
# import idvehi
# import jsonCars
# import imit

from selenium import webdriver
from selenium.webdriver.chrome.options import Options

import time, uvicorn
from pydantic import BaseModel
from datetime import datetime

app = FastAPI()
# app.include_router(imit.encar)
# app.include_router(jsonCars.api)
# app.include_router(idvehi.vehi)
 
@app.get('/hello')
def hello():
    return {"data": "Hello World"}


class Subscription(BaseModel):
    start_date: datetime

@app.webhooks.post("new-subscription")        
def hoo(body: Subscription):
    "WTF"



@app.get("/", response_class = FileResponse) ##index
def pro3():
    return "public2/index.html"


#@app.get("/en") ##english version
#def pro3():
#    return FileResponse("public/pro3en.html")


# @app.get("/vehi/{iddd}")
# def vehi(iddd: str):
#     response = requests.get('http://127.0.0.1:8000/A6') 
#     data = response.json()

#     a = list(filter(lambda d:d["Id"]==iddd, data['SearchResults'][:]))

#     return a



@app.get("/vehs", response_class = FileResponse)
def cars():
    return "public2/vehs.html"


@app.get("/car", response_class = FileResponse)
def car3():
    return "public2/auto1.html"




# @app.get("/아우디/{mod}")
# def audi(mod: str):
    
##    url = 'https://api.encar.com/search/car/list/premium?count=true&q=(And.Hidden.N._.(C.CarType.N._.(C.Manufacturer.%EC%95%84%EC%9A%B0%EB%94%94._.(C.ModelGroup.A6._.Model.A6+(C8_).)))_.(Or.OfficeCityState.%EB%B6%80%EC%82%B0._.OfficeCityState.%EB%8C%80%EA%B5%AC._.OfficeCityState.%EC%9A%B8%EC%82%B0._.OfficeCityState.%EA%B2%BD%EB%82%A8._.OfficeCityState.%EA%B2%BD%EB%B6%81.)_.Year.range(202003..).)&sr=%7CModifiedDate%7C0%7C50'
##
##    headers = {
##    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Safari/605.1.15'
##    }
##
##    response = requests.get(url, headers=headers)
##
##    return { response.content }
    # if mod == 'A6 (C8)':
    #     return FileResponse("public/api/vehi/아우디/A6 (C8).json")



@app.get("/airwater", response_class=HTMLResponse)
def airwater():
    return run()

# @app.get("/audi_img", response_class = FileResponse)
# def audi_img():
#     return "public/_002.jpg"




@app.get("/webdrive")
def webdrive():
    my_user_agent = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    chrome_options.add_argument(f"--user-agent={my_user_agent}")

    driver = webdriver.Chrome(options=chrome_options)
    driver.get("http://www.encar.com/index.do")

    driver_ua = driver.execute_script("return navigator.userAgent")
    print(driver_ua)
    driver.quit()
    
    url = 'https://api.encar.com/search/car/list/premium?count=true&q=(And.Hidden.N._.(C.CarType.N._.(C.Manufacturer.%EC%95%84%EC%9A%B0%EB%94%94._.(C.ModelGroup.A6._.Model.A6+(C8_).)))_.(Or.OfficeCityState.%EB%B6%80%EC%82%B0._.OfficeCityState.%EB%8C%80%EA%B5%AC._.OfficeCityState.%EC%9A%B8%EC%82%B0._.OfficeCityState.%EA%B2%BD%EB%82%A8._.OfficeCityState.%EA%B2%BD%EB%B6%81.)_.Year.range(202003..).)&sr=%7CModifiedDate%7C0%7C50'

    headers = {
    'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
    }

    response = requests.get(url, headers=headers)

    return { response.content }




app.mount("/", StaticFiles(directory="public2"))



#if __name__ == "__main__":
#    uvicorn.run('main:app', host="0.0.0.0", port=33, reload=True)

    

@app.get("/list-files/{folder_name}")
def list_files(folder_name: str):
    # Ensure the path is safe and exists in your project structure
    directory_path = os.path.join(os.getcwd(), folder_name)
    
    if not os.path.isdir(directory_path):
        return {"error": "Folder not found or is not a directory"}

    files = os.listdir(directory_path)
    return {"files": files}





##@app.get("/sajin", response_class=HTMLResponse)
##def root():
##    def watermark_text(input_image_path, text, text2, pos, pos2):
##        
##        drawing = ImageDraw.Draw(input_image_path)#make the image editable
##        red = (180, 0, 0)
##        yall = (204, 153, 0)
##        font = ImageFont.truetype("font/Danj.ttf", 80)
##        drawing.text(pos, text, fill=red, font=font)
##        drawing.text(pos2, text2, fill=yall, font=font)
##
##        buffer = BytesIO()
##        input_image_path.save(buffer, format='JPEG')
##        byte_data = buffer.getvalue()
##        base64_encoded = base64.b64encode(byte_data).decode('utf-8')
##        base = f"data:image/png;base64,{base64_encoded}"
##        return '<img src = "%s"/>' % base

##    response = requests.get('http://127.0.0.1:8000/A6')
##    data = response.json()
##    photo = data['SearchResults'][2]['Photo']
##    photo2 = 'http://ci.encar.com/carpicture'+photo+'001.jpg?impolicy=heightRate'
##
##    img = Image.open(requests.get(photo2, stream=True).raw)
##
##    inp = img
##    text = '& Procars'
##    text2 = '수출'
##    pos=(1640, 300)
##    pos2=(2040, 300)

##    return watermark_text(inp, text, text2, pos, pos2)
