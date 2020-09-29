<template>
    <div id="particles" class="layout-login">
        <div class="layout-form">
            <img src="../assets/image/logo.png"/>
                <Form ref="formInline" :model="formInline" :rules="ruleInline">
                    <FormItem prop="user">
                        <Input type="text" v-model="formInline.userName" placeholder="Username">
                            <Icon type="ios-person-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem prop="password">
                        <Input type="password" v-model="formInline.userPassword" placeholder="Password">
                            <Icon type="ios-lock-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem>
                        <Button ghost type="primary" @click="handleSubmit('formInline')">Signin</Button>
                    </FormItem>
                </Form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LoginPage",
        data() {
            return {
                camera:null,
                scene:null,
                particles:[],
                count:0,
                mouseX:-660,
                mouseY:-510,
                windowHalfX:window.innerWidth / 2,
                windowHalfY:window.innerHeight / 1,
                SEPARATION : 120,
                AMOUNTX : 38,
                AMOUNTY : 30,
                formInline: {
                    userName: '',
                    userPassword: ''
                },
                ruleInline: {
                    userName: [
                        { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                    ],
                    userPassword: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
                }
            }
        },
        mounted:function(){
            this.init();
            this.animate();
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$http.post('/stage/login',this.formInline).then(res => {
                            if (res.data.code === 0) {
                                this.$store.commit('userinfo',res.data.data)
                                this.$Message.success('Success!');
                                this.$router.push('/home/welcome')
                            } else {
                                this.$Message.error('Fail!');
                            }

                        })
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            init: function () {
                var particle;
                var container = document.createElement( 'div' );
                container.id = 'banner-canvas';
                // document.body.appendChild( container );
                document.getElementById('particles').appendChild( container );

                // eslint-disable-next-line no-undef
                this.camera = new THREE.PerspectiveCamera( 55, window.innerWidth / window.innerHeight, 1, 8000 );
                this.camera.position.z = 1500;
                // eslint-disable-next-line no-undef
                this.scene = new THREE.Scene();

                var PI2 = Math.PI * 2;
                // eslint-disable-next-line no-undef
                var material = new THREE.ParticleCanvasMaterial( {

                    // color: '#16a085',
                    color: '#46c37b',
                    program: function ( context ) {
                        context.beginPath();
                        context.arc( 0, 0, 1, 0, PI2, true );
                        context.fill();
                    }

                } );

                var i = 0;

                for ( var ix = 0; ix < this.AMOUNTX; ix ++ ) {

                    for ( var iy = 0; iy < this.AMOUNTY; iy ++ ) {
                        // eslint-disable-next-line no-undef
                        particle = this.particles[ i ++ ] = new THREE.Particle( material );
                        particle.position.x = ix * this.SEPARATION - ( ( this.AMOUNTX * this.SEPARATION ) / 2 );
                        particle.position.z = iy * this.SEPARATION - ( ( this.AMOUNTY * this.SEPARATION ) / 2 );
                        this.scene.add( particle );
                    }

                }
                // eslint-disable-next-line no-undef
                this.renderer = new THREE.CanvasRenderer();
                this.renderer.setSize( window.innerWidth, window.innerHeight );
                container.appendChild( this.renderer.domElement );
                document.addEventListener( 'mousemove', this.onDocumentMouseMove, false );
                document.addEventListener( 'touchstart', this.onDocumentTouchStart, false );
                document.addEventListener( 'touchmove', this.onDocumentTouchMove, false );
                window.addEventListener( 'resize', this.onWindowResize, false );
            },
            onWindowResize: function () {
                this.windowHalfX = window.innerWidth / 2;
                this.windowHalfY = window.innerHeight /2;
                this.camera.aspect = window.innerWidth / window.innerHeight;
                this.camera.updateProjectionMatrix();
                this.renderer.setSize( window.innerWidth, window.innerHeight );

            },
            onDocumentMouseMove: function (event) {
                this.mouseX = event.clientX - this.windowHalfX;
                this.mouseY = event.clientY - this.windowHalfY;
            },
            onDocumentTouchStart:function (event) {
                if ( event.touches.length === 1 ) {
                    event.preventDefault();
                    this.mouseX = event.touches[ 0 ].pageX - this.windowHalfX;
                    this.mouseY = event.touches[ 0 ].pageY - this.windowHalfY;
                }
            },
            onDocumentTouchMove: function (event) {
                if ( event.touches.length === 1 ) {
                    event.preventDefault();
                    this.mouseX = event.touches[ 0 ].pageX - this.windowHalfX;
                    this.mouseY = event.touches[ 0 ].pageY - this.windowHalfY;
                }
            },
            animate() {
                requestAnimationFrame( this.animate );
                this.render();
            },
            render: function () {
                this.camera.position.x += ( this.mouseX - this.camera.position.x ) * .05;
                this.camera.position.y += ( - this.mouseY - this.camera.position.y ) * .05;
                this.camera.lookAt( this.scene.position );

                var i = 0;

                for ( var ix = 0; ix < this.AMOUNTX; ix ++ ) {

                    for ( var iy = 0; iy < this.AMOUNTY; iy ++ ) {

                        var particle = this.particles[ i++ ];
                        particle.position.y = ( Math.sin( ( ix + this.count ) * 0.3 ) * 50 ) + ( Math.sin( ( iy + this.count ) * 0.5 ) * 50 );
                        particle.scale.x = particle.scale.y = ( Math.sin( ( ix + this.count ) * 0.3 ) + 1 ) * 2 + ( Math.sin( ( iy + this.count ) * 0.5 ) + 1 ) * 2;

                    }

                }
                this.renderer.render( this.scene, this.camera );
                this.count += 0.08;
            }
        }
    }
</script>

<style scoped>
.layout-login{
    overflow-x: hidden;
    background: url("../assets/image/a.jpg") no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
    .layout-form{
        width: 15vw;
        height: 60vh;
        position: fixed;
        top: 20vh;
        background: bottom;
        border: 1px red;
    }
</style>
