# Generated by Django 3.1.4 on 2021-03-09 17:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Exercise',
            fields=[
                ('name', models.CharField(default='', max_length=20, unique=True)),
                ('exercising_id', models.BinaryField(primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='Lift',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=20, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('full_name', models.CharField(default='', max_length=20)),
                ('username', models.CharField(default='', max_length=20, unique=True)),
                ('password', models.BinaryField()),
                ('weight', models.IntegerField()),
                ('age', models.IntegerField()),
                ('gender', models.CharField(default='', max_length=20)),
                ('goal', models.CharField(default='', max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='WeighIn',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('todayweight', models.IntegerField()),
                ('entry_date', models.DateTimeField(auto_now_add=True)),
                ('userId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gymapp.user')),
            ],
        ),
        migrations.CreateModel(
            name='TodaysWeight',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('weight', models.IntegerField()),
                ('entry_date', models.DateTimeField(auto_now_add=True)),
                ('userId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gymapp.user')),
            ],
        ),
        migrations.CreateModel(
            name='Loss',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.IntegerField()),
                ('entry_date', models.DateTimeField(auto_now_add=True)),
                ('loser', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gymapp.user')),
            ],
        ),
        migrations.CreateModel(
            name='LiftSet',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('weight', models.IntegerField()),
                ('one_rep_max', models.IntegerField()),
                ('reps', models.IntegerField()),
                ('entry_date', models.DateTimeField(auto_now_add=True)),
                ('lift_name', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gymapp.lift')),
                ('lifter', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gymapp.user')),
            ],
        ),
        migrations.CreateModel(
            name='Gain',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.IntegerField()),
                ('entry_date', models.DateTimeField(auto_now_add=True)),
                ('gainer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gymapp.user')),
            ],
        ),
        migrations.CreateModel(
            name='Friend',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('friends_id', models.IntegerField()),
                ('contact', models.ManyToManyField(related_name='friends', to='gymapp.User')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='self', to='gymapp.user')),
            ],
        ),
        migrations.CreateModel(
            name='Exerciser',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('length_in_min', models.IntegerField()),
                ('entry_date', models.DateTimeField(auto_now_add=True)),
                ('exercise', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gymapp.exercise')),
                ('exerciser', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gymapp.user')),
            ],
        ),
    ]
