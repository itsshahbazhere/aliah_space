const express = require('express');
const router = express.Router();

const {createDepartment} = require('../model/Department');

// create a new department only by admin and his team
// const { auth, admin, team } = require('../middleware/auth');
// router.post('/departments', auth, admin, createDepartment); 
