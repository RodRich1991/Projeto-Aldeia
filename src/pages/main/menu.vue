<template>
    <nav class="d-block navbar navbar-light navbar-expand-md navigation-clean-button" style="background-color:rgb(254,78,78);">
        <div class="container"><router-link to="/"><span class="navbar-brand" style="font-size:32px;">Projeto Aldeia</span></router-link><button class="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navcol-1">
                <ul class="nav navbar-nav mr-auto" style="margin:1px;height:67px;width:474px;">
                    <router-link to="/teste"><li class="nav-item" role="presentation"><a class="nav-link active" href="#" style="font-size:24px;color:rgb(0,0,0);">Jogos</a></li></router-link>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#" style="font-size:24px;color:rgb(0,0,0);">Favoritos</a></li>
                </ul>
                <form class="form-inline" method="post" style="margin:0px;padding:0px;">
                    <h2 class="sr-only">Login Form</h2>
                    <div class="illustration"></div>
                    <div class="form-group"><input class="form-control" type="email" name="email" placeholder="Email"></div>
                    <div class="form-group"><input class="form-control" type="password" name="password" placeholder="Password"></div>
                    <div class="form-group"><button class="btn btn-primary btn-block" type="submit">Log In</button></div><a href="#" class="forgot" style="color:rgb(0,0,0);">Recuperar Senha</a>
                    <router-link to="/cadastro-usuario"><span class="forgot" style="color:rgb(0,0,0);">Cadastrar</span></router-link>
                </form>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
</style>
