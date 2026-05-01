from fastapi import FastAPI, Query, Path
from typing import Optional
#from fastapi.responses import JSONResponse

import requests, json

from fastapi import APIRouter

encar = APIRouter(prefix="/encar")

def O(F):
    with open(F, 'r') as jf:
        d = json.load(jf)
        return d["SearchResults"]

@encar.get("/bmw{n}")
async def bmw(n:str):
    match n:
        case "3":
            return O('public2/api/vehi/bmw/3.json')
        case "32":
            return O('public2/api/vehi/bmw/32.json')
        case "33":
            return O('public2/api/vehi/bmw/33.json')
        case "5":
            return O('public2/api/vehi/bmw/5.json')


















# Мок базы данных книг
books_db = [
{"title": "Python Crash Course", "author": "Eric Matthes", "year": 2019},
{"title": "Fluent Python", "author": "Luciano Ramalho", "year": 2015},
{"title": "Clean Code", "author": "Robert C. Martin", "year": 2008},
{"title": "The Pragmatic Programmer", "author": "Andrew Hunt, David Thomas", "year": 1999},
# Добавьте больше книг при необходимости
]
@encar.get("/books/")
async def read_books(page: int = Query(1, gt=0), size: int = Query(10, gt=0), sort_by: Optional[str] = None):
# Применяем пагинацию
    start_index = (page - 1) * size
    end_index = start_index + size
    paginated_books = books_db[start_index:end_index]
# Применяем сортировку, если указана
    if sort_by:
        paginated_books = sorted(paginated_books, key=lambda x: x.get(sort_by, 0))
    return {"page": page, "size": size, "sort_by": sort_by, "books": paginated_books}

#book###