from django.contrib import admin
from .models import Reserva


# registra reserva
@admin.register(Reserva)
class ReservaAdmin(admin.ModelAdmin):
    list_display = ('nome', 'email', 'data_reserva', 'horario', 'criacao')

