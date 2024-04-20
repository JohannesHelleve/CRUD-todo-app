import { supabase } from "../../../backend/src";

export async function deleteTask(id: number) {

    const res = await supabase
        .from('todo')
        .delete()
        .eq('id', id)

    return res.status;
}