from fastapi import FastAPI, Query, Path
from fastapi.responses import FileResponse, JSONResponse, HTMLResponse
#from fastapi.staticfiles import StaticFiles

import requests, json
from fastapi.requests import Request

from fastapi import APIRouter

from typing import Annotated, Union, Optional
from pydantic import BaseModel
from datetime import datetime

from imit import O



api = APIRouter(prefix="/cars")##

    

    
class Brands(BaseModel):
    bmw: Optional[str] = None
    benz: Optional[str] = None

    
#@api.get("/items")
#def read_item(q, b, c: Union[str, None] = None):
#    return { q, b, c }


@api.get("/cars")
def Brands(b: Annotated[Brands, Query()]):
    
    match b.bmw:
        case '3':
            return O('public2/api/vehi/bmw/3.json')
        case '5':
            return O('public2/api/vehi/bmw/5.json')
        
    match b.benz:
        case 'CLS-C257':
            return O("public2/api/vehi/benz/CLS-C257.json")
        case 'G-W463b':
            return O("public2/api/vehi/벤츠/G-W463b.json")
        

     
    
def reQue(get):        
    re = requests.get(get) 
    return re.json()
#imitaion
@api.get("/bmw={model}-{k}/{p}")
def bmw(model: str, k:str, p:int):
    #bmw3 = O('public2/api/vehi/bmw/3.json')
    bmw3 = reQue('http://127.0.0.1:33/encar/bmw3')
    bmw32 = O('public2/api/vehi/bmw/32.json')
    bmw33 = O('public2/api/vehi/bmw/33.json')
    
    if model=='3'and k=='er'and p==1:
        return bmw3
    if model=='3'and k=='er'and p==2:
        return bmw32
    if model=='3'and k=='er'and p==3:                                                                                                                           
        return bmw33
    
    if model=='3'and p==1 and k=='G20':
        G20 = [g for g in bmw3 if'(G20)'in g["Model"]]
        return G20
    if model=='3'and p==2 and k=='G20':
        G20 = [g for g in bmw32 if'(G20)'in g["Model"]]
        return G20
    if model=='3'and p==3 and k=='G20':
        G20 = [g for g in bmw32 if'(G20)'in g["Model"]]
        return G20
    
    if model=='3'and p==1 and k=='F30':
        F30 = [f for f in bmw3 if'(F30)'in f["Model"]]
        return F30
    if model=='3'and p==2 and k=='F30':
        F30 = [f for f in bmw32 if'(F30)'in f["Model"]]
        return F30
    if model=='3'and p==3 and k=='F30':
        F30 = [f for f in bmw33 if'(F30)'in f["Model"]]
        return F30
    
    if model=='3'and p==1 and k=='E90':
        E90 = [e for e in bmw3 if'(E90)'in e["Model"]]
        return E90
    if model=='3'and p==2 and k=='E90':
        E90 = [e for e in bmw32 if'(E90)'in e["Model"]]
        return E90
    if model=='3'and p==1 and k=='E90':
        E90 = [e for e in bmw33 if'(E90)'in e["Model"]]
        return E90
    
    if model=='3'and k=='06':
        old = list(filter(lambda w:w["Model"]=='3시리즈', bmw3[:]))
        return old

        
        
        
          #for i in range(len(a)):
        #    b = (a[i]["Model"])
        #    if '(G20)' in b:
        #         print(b)
        
        
@api.get("/benz/{model}", response_class = FileResponse)
def pro3(model: str):
    match model:
        case 'CLS-C257':
            return "public2/api/vehi/벤츠/CLS-클래스 C257.json"
        case 'G-W463b':
            return "public2/api/vehi/벤츠/G-클래스 W463b.json"
    
    
@api.get("/audi/{model}")
def audi(model: str):
    match model:
        case 'A6 (C8)':
            return FileResponse("public/api/vehi/아우디/A6 (C8).json")
        case 'A7 (4K)':
            return FileResponse("public/api/vehi/아우디/A7 (4K).json")
    
    


        

