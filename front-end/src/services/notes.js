import Api from './api';

const NotesService = {
    index: () => Api.get('/notes', { headers: {'x-acess-token': localStorage.getItem('token')}}),

    create: () => Api.post('/notes', 
    {'title': 'Nova nota', 'body': 'criando  nova ...'},
    { headers: {'x-acess-token': localStorage.getItem('token')}}),

    delete: (id) => Api.delete(`/notes/${id}`, 
    { headers: {'x-acess-token': localStorage.getItem('token')}}),

    update: (id, params) => Api.put(`/notes/${id}`, params,
    { headers: {'x-acess-token': localStorage.getItem('token')}}),

    search: (query) => Api.get(`notes/search?query=${query}`,
    { headers: {'x-acess-token': localStorage.getItem('token')}}),
}

export default NotesService;

