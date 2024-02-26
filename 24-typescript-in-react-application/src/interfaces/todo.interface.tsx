export interface ITask{
        title: string,
        name: string,
        deadline: string,
        isCompleted: boolean
}


export interface ITodo{
        _created?: number,
        _data_type?: string,
        _is_deleted?: false,
        _modified?: number,
        _self_link?: string,
        _user?: string,
        _uuid: string,
        deadline: string,
        isCompleted: boolean,
        name: string,
        payload?: string,
        title: string
      }