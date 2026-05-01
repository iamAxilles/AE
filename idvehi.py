# -*- coding: utf-8 -*-
from fastapi import APIRouter
from fastapi.responses import FileResponse, HTMLResponse, JSONResponse
import requests, json
from konlpy.tag import Kkma

from jsonCars import O

vehi = APIRouter(prefix="/vehi") 


#async def ReQ(m,i):
#    re = requests.get(m)
#    js = re.json()
#    
#    a = list(filter(lambda d:d["Id"]==i, data[:]))
#    return a
    

@vehi.get('/router')
def hello():
    return {"":"Hello Router"}


h = {
    'User-Agent': 'Mozilla/5.0 (compatible; YandexBot/3.0; +http://yandex.com/bots)'
            }




@vehi.get("/BMW={model}-{iddd}")
def car3bmw(model: str, iddd: str):
    if '3시리즈' in model:
        return list(filter(lambda d:d["Id"]==iddd, O('public2/api/vehi/bmw/3.json')[:]))
    
    elif '5시리즈' in model:
        re = requests.get('http://127.0.0.1:33/veh/?bmw=5', headers=h) 
        js = re.json()

        carid = list(filter(lambda d:d["Id"]==iddd, js[:]))
        return carid
        
        
        
@vehi.get("/benz&{mod}/{iddd}")
def car3(mod: str, iddd: str):
    if mod == 'CLS-C257':
        re = requests.get('/vehs/benz/CLS-C257') 
        re = re.json()

        i = list(filter(lambda d:d["Id"]==iddd, re['SearchResults'][:]))
        return i

    elif mod == 'G-클래스 W463b':
        response = requests.get('/벤츠/G-클래스 W463b') 
        data = response.json()

        a = list(filter(lambda d:d["Id"]==iddd, data['SearchResults'][:]))
        return a



@vehi.get("/vehi/아우디&{mod}/{iddd}")
def vehi_audi(mod: str, iddd: str):
    if mod == 'A6 (C8)':
        response = requests.get('http://127.0.0.1:8000/아우디/A6 (C8)') 
        data = response.json()

        a = list(filter(lambda d:d["Id"]==iddd, data['SearchResults'][:]))
        return a
        
    elif mod == 'A7 (4K)':
        response = requests.get('http://127.0.0.1:8000/아우디/A7 (4K)') 
        data = response.json()

        a = list(filter(lambda d:d["Id"]==iddd, data['SearchResults'][:]))
        return a
