# Sago Mini Assignment (Server) API  

## Instructions to start 
- `npm install`
- `npm start` or `npm run dev-start`

Note: There were a few things that did not make sense from the requirements for Task 1 and therefore I made assumptions and continued. One issue being the /read route mentioned to have params and it did not make sense to use params for it and therefore I used query instead and changed /set and /bump to have bodies instead of using params.  

### Available Routes 

- `api/read?bundle_id=com.farooqi.mohammad`  
- `api/set`  
body: `{ "bundle_id": "com.farooqi.mohammad", "new_build_number": 4 }`
- `api/bump`  
body: `{ "bundle_id": "com.farooqi.mohammad" }`
