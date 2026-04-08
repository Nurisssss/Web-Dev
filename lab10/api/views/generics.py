from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from api.models import Product, Category
from api.serializers import ProductSerializer, CategorySerializer


# ─────────────────────────────────────────
#  Product Views
# ─────────────────────────────────────────

class ProductListAPIView(generics.ListCreateAPIView):
    """GET (list) + POST (create) — /api/products/"""
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ProductDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    """GET + PUT + DELETE — /api/products/<product_id>/"""
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_url_kwarg = 'product_id'


# ─────────────────────────────────────────
#  Category Views
# ─────────────────────────────────────────

class CategoryListAPIView(generics.ListCreateAPIView):
    """GET (list) + POST (create) — /api/categories/"""
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    """GET + PUT + DELETE — /api/categories/<category_id>/"""
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_url_kwarg = 'category_id'


# ─────────────────────────────────────────
#  Custom: All products inside a category
# ─────────────────────────────────────────

class CategoryProductsAPIView(APIView):
    """GET — /api/categories/<category_id>/products/"""

    def get(self, request, category_id):
        try:
            category = Category.objects.get(pk=category_id)
        except Category.DoesNotExist:
            return Response({'error': 'Category not found'}, status=status.HTTP_404_NOT_FOUND)

        products = Product.objects.filter(category=category)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
