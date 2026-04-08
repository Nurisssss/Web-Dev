# Shop Back — Lab 10: Building API Views

## Quick Start (Do This First!)

### 1. Install Python
Download from https://python.org if you don't have it.

### 2. Open Terminal / Command Prompt
Navigate to the project folder:
```
cd path/to/shop_back
```

### 3. Create a virtual environment
```bash
python -m venv venv
```

### 4. Activate the virtual environment
Windows:
```
venv\Scripts\activate
```
Mac/Linux:
```
source venv/bin/activate
```

### 5. Install dependencies
```bash
pip install -r requirements.txt
```

### 6. Create the database
```bash
python manage.py makemigrations
python manage.py migrate
```

### 7. Run the server
```bash
python manage.py runserver
```

Open your browser: http://127.0.0.1:8000/api/products/

---

## API Endpoints

| Method | URL | Description |
|--------|-----|-------------|
| GET | /api/products/ | List all products |
| POST | /api/products/ | Create a product |
| GET | /api/products/1/ | Get product #1 |
| PUT | /api/products/1/ | Update product #1 |
| DELETE | /api/products/1/ | Delete product #1 |
| GET | /api/categories/ | List all categories |
| POST | /api/categories/ | Create a category |
| GET | /api/categories/1/ | Get category #1 |
| PUT | /api/categories/1/ | Update category #1 |
| DELETE | /api/categories/1/ | Delete category #1 |
| GET | /api/categories/1/products/ | All products in category #1 |

---

## Switching Between Levels

Edit `api/views/__init__.py` and change the import:

```python
# Level 2 - Function Based Views
from api.views.fbv import products_list, product_detail

# Level 3 - Class Based Views
from api.views.cbv import ProductListAPIView, ProductDetailAPIView

# Level 4 - Mixins
from api.views.mixins import ProductListAPIView, ProductDetailAPIView

# Level 5 - Generics (DEFAULT - required by lab)
from api.views.generics import ProductListAPIView, ProductDetailAPIView, ...
```

---

## Project Structure

```
shop_back/
├── manage.py
├── requirements.txt
├── db.sqlite3          (created after migrate)
├── shop_back/
│   ├── settings.py
│   └── urls.py
└── api/
    ├── models.py        ← Category + Product models
    ├── serializers.py   ← CategorySerializer + ProductSerializer
    ├── urls.py          ← All route definitions
    └── views/
        ├── __init__.py  ← Controls active level
        ├── fbv.py       ← Level 2: Function Based Views
        ├── cbv.py       ← Level 3: Class Based Views
        ├── mixins.py    ← Level 4: Mixins
        └── generics.py  ← Level 5: Generic Views (ACTIVE)
```
