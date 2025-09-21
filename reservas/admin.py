from django.contrib import admin
from .models import Reserva, Ambiente


# registra reserva
@admin.register(Reserva)
class ReservaAdmin(admin.ModelAdmin):
    list_display = ('nome', 'email', 'data_reserva', 'horario_inicio', 'horario_fim', 'criacao', 'periodo', 'ambiente','status')
    list_editable = ('ambiente', 'data_reserva', 'periodo','status')  # Campos que podem ser editados diretamente na lista
    search_fields = ('nome', 'ambiente__nome')  
    list_filter = ('data_reserva', 'periodo','status')

@admin.register(Ambiente)
class AmbienteAdmin(admin.ModelAdmin):
    list_display = ('nome', 'tipo', 'capacidade')