from pecan import expose, redirect
from webob.exc import status_map
import uuid

class NetworksController(object):

    @expose('json')
    def index(self):
        networks = []
        num = 5
        while num > 0:
            networks.append(dict(id = str(uuid.uuid4()), name = "I am a Network"))
            num = num - 1
        return networks

class RootController(object):

    @expose(generic=True)
    def index(self):
        redirect('/app/index.html')

    @expose('error.html')
    def error(self, status):
        try:
            status = int(status)
        except ValueError:  # pragma: no cover
            status = 500
        message = getattr(status_map.get(status), 'explanation', '')
        return dict(status=status, message=message)

    networks = NetworksController()
