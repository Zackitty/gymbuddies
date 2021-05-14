import os

baseUrl = os.environment['REACT_APP_BASE_URL'] or 'http://localhost:8000'
imageUrl = f'{baseUrl}/'
apiUrl = f'{baseUrl}/api'