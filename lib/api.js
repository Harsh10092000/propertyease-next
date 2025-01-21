import pool from "@/app/libs/mysql";

export const getData = async () => {
    try {
      
      const db = await pool;
      const q =
        `SELECT DISTINCT property_module_images.* ,property_module.* ,agent_data.agent_type as user_type, agent_data.agent_name , agent_data.agent_sub_district, agent_data.agent_city, agent_data.agent_state FROM property_module left join property_module_images on 
    property_module.pro_id = property_module_images.img_cnct_id left join (SELECT agent_type,user_cnct_id,agent_name ,agent_sub_district, agent_city, agent_state FROM agent_module) as agent_data on 
    property_module.pro_user_id = agent_data.user_cnct_id where pro_listed = 1 group by pro_id ORDER BY pro_id DESC`;
      const q1 = "SELECT COUNT(*) as total from property_module where pro_listed = 1";
      const [rows] = await db.query(q);
      const [total] = await db.query(q1);

      return { row: rows, total: total };
    } catch (err) {
      
      return err;
    }
  };