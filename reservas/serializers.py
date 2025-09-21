from rest_framework import serializers
from .models import Reserva, Ambiente

class ReservaSerializer(serializers.ModelSerializer):
    ambiente = serializers.PrimaryKeyRelatedField(queryset=Ambiente.objects.all())
    class Meta:
        model = Reserva
        fields = '__all__'
    
    #
    def to_representation(self, instance):
        rep = super().to_representation(instance)
        rep['ambiente'] = str(instance.ambiente)  
        return rep
        
    def validate(self, data):
        # Verifica se já existe uma reserva para a mesma estação, data e período
        if Reserva.objects.filter(
            ambiente=data['ambiente'],
            data_reserva=data['data_reserva'],
            periodo=data['periodo'],
        ).exists():
            raise serializers.ValidationError(
                "Esta estação já está reservada para esse período e data."
            )
        return data


class AmbienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ambiente
        fields = ['id', 'nome', 'tipo', 'capacidade', 'descricao']
    
    def __str__(self):
     return self.nome