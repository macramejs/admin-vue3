import { loadUser } from '@/modules/api';
import { isAuthenticated, authedUser } from '@/modules/state';
import { NavigationGuardNext, Router } from 'vue-router';

interface MiddlewareParams {
    next: NavigationGuardNext;
    router: Router;
}

const auth = ({ next, router }: MiddlewareParams) => {
    if (isAuthenticated.value) {
        return next();
    }
    loadUser()
        .then(response => {
            isAuthenticated.value = true;
            authedUser.value = response;
            return next();
        })
        .catch(error => {
            isAuthenticated.value = false;
            return router.push('/login');
        });

    return next();
};

const guest = ({ next, router }: MiddlewareParams) => {
    if (isAuthenticated.value) {
        loadUser()
            .then(response => {
                // not a guest, go home!
                isAuthenticated.value = true;
                authedUser.value = response;
                return router.push('/');
            })
            .catch(() => {
                // is a guest, continue…
                isAuthenticated.value = false;
                return next();
            });
    }
    return next();
};

export { auth, guest };
