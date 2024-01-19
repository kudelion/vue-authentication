<template>
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <div>
                <h2>Signup {{fname}}</h2> 
            </div>
            <form @submit.prevent="onSignup()">
                <div class="form-group row py-1">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input type="email" 
                        class="form-control" id="inputEmail" 
                        placeholder="Email" v-model="email"
                        />
                        <div class="errors" v-if="errors.email">
                            {{ errors.email }}
                        </div>
                    </div>
                </div>
                <div class="form-group row py-1">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                        <input type="password" 
                        class="form-control" id="inputPassword" 
                        placeholder="Password" v-model="password"
                        />
                        <div class="errors" v-if="errors.password">
                            {{ errors.password }}
                        </div>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-10">
                    <button type="submit" class="btn btn-primary">Sign up</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import { mapActions } from 'vuex';
    
    import InValidations from '../services/InValidations';
    import {SIGNUP_ACTION} from '../storage/storeConstants';

export default{
    data() {
        return{
            email: '',
            password: '',
            errors: [],
        }
    },
    methods:{
        ...mapActions('authenticate',{
            signup: SIGNUP_ACTION,
        }),

        onSignup(){
            let Validations = new InValidations
                (
                    this.email, 
                    this.password
                );
                this.errors = Validations.checkValidations();
                if ('email' in this.errors || 'password' in this.errors){
                    return false;
                }
                // this.errors = Validations.checkValidations();
                // if (this.errors.length){
                //     return false;
                // } 
                //SIGN UP REGISTRATION
                this.signup(
                        {
                            email:this.email,
                            passowrd:this.password
                        }
                    );
        },
    },
    computed: {
            ...mapState('authenticate', {
            fname: (ben) => ben.name,
        }),
    },
};
</script>
