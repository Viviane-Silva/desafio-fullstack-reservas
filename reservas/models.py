from django.db import models

# cria espaço trabalho/salas
class Ambiente(models.Model):
    NOME_TIPOS = [
        ('estacao', 'Estação de Trabalho'),
        ('sala', 'Sala de Reunião'),
        ('auditorio', 'Auditório'),
    ]

    nome = models.CharField(max_length=100, unique=True)
    tipo = models.CharField(max_length=20, choices=NOME_TIPOS)
    capacidade = models.PositiveIntegerField(default=1) 
    descricao = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.nome}"

# cria reserva
class Reserva(models.Model):
    STATUS_CHOICES = [
        ('ativo', 'Ativo'),
        ('cancelada', 'Cancelada'),
    ]
    nome = models.CharField(max_length=100)
    email = models.EmailField()
    data_reserva = models.DateField()
    horario = models.TimeField()
    periodo = models.CharField(max_length=20)  # obrigatório
    ambiente = models.ForeignKey(Ambiente, on_delete=models.CASCADE) 
    criacao = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='ativo')

        
    def __str__(self):
        return f"{self.nome} - {self.data_reserva} {self.horario}"
    
