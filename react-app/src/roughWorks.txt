App Structure
-------------

● src
+---● actions
|   |
|   |-- api.js (handle all http request)
|   |-- dCandidate.js (Redux actions & action creators) 
|   |-- store.js (configure redux store)
|
+---● components
|   |
|   |--DCandidateForm.js (form operations) - child
|   |--DCandidates.js  (list of records) - parent
|   |--useForm.js (handles common form opearations)
|
|---● reducers
|   |
|   |--dCandidate.js
|   |--index.js
|
|-- App.js
|-- index.js
|-- index.css


redux, react-redux, redux-thunk

actions - create, update, delete etc ,data 
reducers
store

cmpnt -> dispatch(action) -> reducer -> cmpnt