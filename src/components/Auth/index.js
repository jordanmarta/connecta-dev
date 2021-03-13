import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { setUserData } from "../../actions/accountAction";

import authService from "../../services/authService";

//componente para persistência dos dados no redux
function Auth({ children }) {
  const dispatch = useDispatch();

  // useCallback p/ garantir que essa função nao vai ser disparada repetidamente sem necessidade
  const initAuth = useCallback(async () => {
    if (authService.isAuthenticated()) {
      //recuperar os dados do usuário logado
      await dispatch(setUserData());
    }
  }, [dispatch]);

  useEffect(() => {
    initAuth();
  }, [initAuth]);

  return children;
}

export default Auth;
