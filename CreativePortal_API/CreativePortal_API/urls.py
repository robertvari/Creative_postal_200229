from django.contrib import admin
from django.urls import path, include

from users.views import email_sent
from allauth.account.views import confirm_email

urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/auth/', include('rest_auth.urls')),

    path('api/auth/registration/account-confirm-email/', email_sent, name="account_email_verification_sent"),
    path('api/auth/registration/account-confirm-email/<key>/', confirm_email),
    path('api/auth/registration/', include('rest_auth.registration.urls'))
]
