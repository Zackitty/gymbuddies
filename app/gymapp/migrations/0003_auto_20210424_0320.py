# Generated by Django 3.1.7 on 2021-04-24 03:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gymapp', '0002_auto_20210417_0218'),
    ]

    operations = [
        migrations.AlterField(
            model_name='liftset',
            name='one_rep_max',
            field=models.IntegerField(null=True),
        ),
    ]
