from django import template
from django.conf import settings

register = template.Library()


@register.filter(name='nickname')
def _nickname(user):
    name = user
    if settings.ENABLE_NICKNAME and user.first_name:
        name = user.first_name

    if user.is_staff and not settings.DEBUG:
        return '<font color="#409BD1">%s</font>' % name
    else:
        return name