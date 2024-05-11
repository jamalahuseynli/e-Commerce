import React from 'react'
import Sidebar from '../admin/Sidebar'
import '../admin/admin.css'

const AdminLayout = (props) => {
    return (
        <div className="admin-layout">
            <div className="row gx-5">
                <div className="col-3">
                    <Sidebar />
                </div>
                <div className="col-8">
                    <main>
                        {
                            props.children
                        }
                    </main>
                </div>

            </div>
        </div>
    )
}

export default AdminLayout