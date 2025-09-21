
from rest_framework import viewsets
from .models import Reserva, Ambiente
from .serializers import ReservaSerializer, AmbienteSerializer


class ReservaViewSet(viewsets.ModelViewSet):
    """
    ViewSet para CRUD de reservas.
    """
    queryset = Reserva.objects.all()
    serializer_class = ReservaSerializer

class AmbienteViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Ambiente.objects.all()
    serializer_class = AmbienteSerializer

