const db = require('./dbConfig');


function find() {
   return db('schemes')
}

function findById(id) {
    return db('schemes').where({id}).first()
}

function findSteps(id) {
    return db('steps as st')
        .join('schemes as s', 's.id', 'st.scheme_id')
        .select('st.id', 's.scheme_name', 'st.step_number', 'st.instructions')
        .where('st.scheme_id', id);
}


function add(scheme) {
     return db('schemes').insert(scheme, 'id')
    
}

function update(details, id) {
    return db('schemes').where({id}).update(details);
}

function remove(id) {
    return db('schemes').where({id}).del();
}
    

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
    findSteps
}