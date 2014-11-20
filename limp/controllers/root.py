from pecan import expose, redirect
from webob.exc import status_map


class RootController(object):

    @expose(generic=True)
    def index(self):
        redirect('app/index.html')

    @expose('error.html')
    def error(self, status):
        try:
            status = int(status)
        except ValueError:  # pragma: no cover
            status = 500
        message = getattr(status_map.get(status), 'explanation', '')
        return dict(status=status, message=message)
