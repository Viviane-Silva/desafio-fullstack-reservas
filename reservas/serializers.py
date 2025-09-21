from rest_framework import serializers
from .models import Reserva, Ambiente
from datetime import datetime, timedelta

class ReservaSerializer(serializers.ModelSerializer):
    ambiente = serializers.PrimaryKeyRelatedField(queryset=Ambiente.objects.all())

    class Meta:
        model = Reserva
        fields = '__all__'

    def to_representation(self, instance):
        rep = super().to_representation(instance)
        rep['ambiente'] = str(instance.ambiente)
        return rep

    def validate(self, data):
        ambiente = data['ambiente']
        data_reserva = data['data_reserva']
        inicio = data['horario_inicio']
        fim = data['horario_fim']

        # Validação de intervalo de horário
        if fim <= inicio:
            raise serializers.ValidationError("Horário final deve ser maior que o horário inicial.")

        duracao = datetime.combine(data_reserva, fim) - datetime.combine(data_reserva, inicio)
        if duracao > timedelta(hours=8):
            raise serializers.ValidationError("A duração máxima permitida é de 8 horas.")

        # Verifica conflitos com outras reservas ativas
        conflitos = Reserva.objects.filter(
            ambiente=ambiente,
            data_reserva=data_reserva,
            status='ativo'
        )

        for reserva in conflitos:
            if (
                inicio < reserva.horario_fim and
                fim > reserva.horario_inicio
            ):
                raise serializers.ValidationError(
                    f"O ambiente '{ambiente.nome}' já está reservado entre "
                    f"{reserva.horario_inicio.strftime('%H:%M')} e {reserva.horario_fim.strftime('%H:%M')}."
                )

        return data


class AmbienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ambiente
        fields = ['id', 'nome', 'tipo', 'capacidade', 'descricao']
    
    def __str__(self):
     return self.nome