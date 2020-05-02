from django.contrib.auth.models import BaseUserManager


class CreativeUserManager(BaseUserManager):
    def create_user(self, email, password=None, superuser=False):
        if not email:
            raise ValueError('User must have an email!')

        if not password:
            raise ValueError('User must have an password!')

        user = self.model(
            email=self.normalize_email(email),
        )

        user.set_password(password)

        if superuser:
            user.is_admin = True
            user.is_staff = True
            user.is_superuser = True

        user.save(using=self._db)

        return user

    def create_superuser(self, email, password):
        user = self.create_user(
            email,
            password,
            superuser=True
        )

        return user