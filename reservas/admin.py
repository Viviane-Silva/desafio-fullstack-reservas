from django.contrib import admin
from .models import Reserva


# registra reserva
@admin.register(Reserva)
class ReservaAdmin(admin.ModelAdmin):
    list_display = ('nome', 'email', 'data_reserva', 'horario', 'criacao', 'periodo', 'estacao')
    list_editable = ('estacao', 'data_reserva', 'periodo')  # Campos que podem ser editados diretamente na lista
    search_fields = ('nome_usuario', 'estacao__nome')  
    list_filter = ('data_reserva', 'periodo')
