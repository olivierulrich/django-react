# Generated by Django 2.1.7 on 2019-02-13 11:40

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Testimonial',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('customer', models.CharField(max_length=100)),
                ('experience', models.TextField()),
                ('created_at', models.DateField(auto_now_add=True)),
            ],
        ),
    ]