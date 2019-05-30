import '../data/users';
import { usersList } from '../data/users';

export class Index{
    loadUsers(){
        let li = '';
        usersList.forEach(user =>{
            li = li + '<li class="list-group-item" id=id_"' + user.name + '">' + user.name + '</li>';
        });
        document.getElementById('usersList').innerHTML = li;
    }
    sortByLevel(level){

        let card = '<div class="card border border-primary rounded mt-2"><div class="card-body"><h2 class="card-title">Nivel: ' + level + '</h2>';

        usersList.forEach(user =>{
            if (user.level === level){
                card = card + '<p class="card-text lead">' + user.name + '</p>';
            }
        });
        card = card + '</div></div>';

        return card;
    }
    sortUsersByLevel(){
        let level100 = this.sortByLevel('100');
        let level200 = this.sortByLevel('200');
        let level300 = this.sortByLevel('300');
        let level400 = this.sortByLevel('400');
        let level500 = this.sortByLevel('500');

        document.getElementById('sortgroup').innerHTML = level100 + level200 + level300 + level400 + level500;
    }

    filterUsersByName(){
        let name = document.getElementById('filterInputUsers').value;
        usersList.forEach(user =>{
            if (user.name !== name && name !== ''){
                document.getElementById('id_' + name).style.display = 'none';
            }
        });
    }


}