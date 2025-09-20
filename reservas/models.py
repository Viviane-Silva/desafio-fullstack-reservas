from django.db import models

# cria reserva
from django.db import models

class Reserva(models.Model):
    nome = models.CharField(max_length=100)
    email = models.EmailField()
    data_reserva = models.DateField()
    horario = models.TimeField()
    periodo = models.CharField(max_length=20)  # obrigatório
    estacao = models.CharField(max_length=50)  # obrigatório
    criacao = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.nome} - {self.data_reserva} {self.horario}"

