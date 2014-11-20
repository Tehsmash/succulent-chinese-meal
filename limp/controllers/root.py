from pecan import expose, redirect, abort
from pecan.rest import RestController
from webob.exc import status_map
import uuid

networks = []
num = 5
while num > 0:
    networks.append(dict(id = str(uuid.uuid4()), name = "I am a Network"))
    num = num - 1

class NetworksController(RestController):

    @expose('json')
    def get_one(self, id):
        for network in networks:
            if network['id'] == id:
                return network
        abort(404)

    @expose('json')
    def get_all(self):
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
