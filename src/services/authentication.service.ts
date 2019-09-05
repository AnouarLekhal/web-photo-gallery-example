export class AuthenticationService {

    isConnected: boolean = false;

    signIn(username: string, password: string) {
        if (username === 'guest' && password === 'guest')
            this.isConnected = true;
        return this.isConnected;

        // return new Promise(
        //     (resolve, reject) => {
        //         setTimeout(
        //             () => {
        //                 if (username === 'guest' && password === 'guest')
        //                 this.isConnected = true;
        //                 this.isConnected = true;
        //                 resolve(true);
        //             }, 2000
        //         );
        //     }
        // );
    }

    signOut() {
        this.isConnected = false;
    }
}