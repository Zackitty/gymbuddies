import os

if os.environ.get('REACT_APP_BASE_URL'):
  baseUrl = os.environ.get('REACT_APP_BASE_URL') 
else:
  baseUrl = 'http://localhost:8000'
imageUrl = f'{baseUrl}/'
apiUrl = f'{baseUrl}/api'