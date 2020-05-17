from django.shortcuts import render


def email_sent(request):
    return render(request, 'account/email_confirm.html')
