from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static

from users.views import email_sent
from allauth.account.views import confirm_email
from frontend.views import FrontendRenderView

urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/auth/', include('rest_auth.urls')),

    path('api/auth/registration/account-confirm-email/', email_sent, name="account_email_verification_sent"),
    path('api/auth/registration/account-confirm-email/<key>/', confirm_email),
    path('api/auth/registration/', include('rest_auth.registration.urls')),

    path('api/users/', include('users.urls')),
    path('api/posts/', include('posts.urls'))
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


urlpatterns += [
    re_path('', FrontendRenderView.as_view(), name="home")
]