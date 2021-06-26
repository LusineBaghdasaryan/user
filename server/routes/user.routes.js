const {Router} = require('express');
const User = require('../models/User');
const router = Router();


// /api/user/:id
router.get(
        '/:id',
        async (req, res) => {
            try {
                const {id} = req.params;
                const user = await User.findOne({_id:id});
                if (!user) {
                    return res.status(400).json({message: 'User not found',hasError:true})
                }
                res.status(201).json({user,hasError:false});
                
            } catch (e) {
                res.status(500).json({message: 'Something went wrong!',hasError:true});
            }
        });

module.exports = router;
