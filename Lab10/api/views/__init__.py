# Switch between implementations by changing the import source:
# from api.views.fbv import products_list, product_detail          # Level 2
# from api.views.cbv import ProductListAPIView, ProductDetailAPIView  # Level 3
# from api.views.mixins import ProductListAPIView, ProductDetailAPIView  # Level 4
from api.views.generics import (  # Level 5 — active
    ProductListAPIView,
    ProductDetailAPIView,
    CategoryListAPIView,
    CategoryDetailAPIView,
    CategoryProductsAPIView,
)
