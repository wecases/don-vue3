import { defineStore } from 'pinia'

type userInfo = {
    id: number
    username: string
    phone: number
    create_at: Date
}

type columns = {
    align?: string | 'left' | 'right' | 'center'
    width?: number
    colKey: string
    title: string
    fixed?: string | 'left' | 'right' | 'center'
    foot: string
}

export type data = {
    id: number;
    platform: string;
    type: string;
    default: string;
    /**
     * 详情
     */
    detail: {
        position: string;
    };
    description: string;
    needed: string;
}

export const useStore = defineStore('user', {
    state: () => ({
        username: '1231231' as userInfo['username'],
        columns: [
            {
                align: 'center',
                width: 100,
                colKey: 'index',
                title: '序号',
                fixed: 'left',
                foot: '总述',
            },
            {
                colKey: 'platform',
                title: '平台',
                width: 120,
                foot: '公有(5)',
            },
            {
                colKey: 'type',
                title: '类型',
                width: 120,
                foot: 'Number(5)',
            },
            {
                colKey: 'default',
                title: '默认值',
                width: 150,
                foot: '-',
            },
            {
                colKey: 'detail.position',
                title: '详情信息',
                width: 250,
                foot: '-',
            },
            {
                colKey: 'description',
                title: '说明',
                width: 120,
                foot: '数据(10)',
            },
            {
                colKey: 'needed',
                title: '必传',
                foot: '否(6)',
                width: 120,
            },
            {
                colKey: 'operation',
                title: '操作',
                width: 100,
                cell: 'operation',
                fixed: 'right',
            },
        ] as columns[],
        userData: [] as data[]
    }),
    actions: {
        getUserInfo() {
            // $api.then()
            this.username = 'don'
        },
        updateUser() {
            // $api.then()
            this.username = this.username == 'waset' ? 'don' : 'waset'
        },
        getData() {
            const data = [];
            for (let i = 0; i < 20; i++) {
                data.push({
                    id: i,
                    platform: i % 2 === 0 ? '共有' : '私有',
                    type: ['String', 'Number', 'Array', 'Object'][i % 4],
                    default: ['-', '0', '[]', '{}'][i % 4],
                    detail: {
                        position: `读取 ${i} 个数据的嵌套信息值`,
                    },
                    description: '数据源',
                    needed: i % 4 === 0 ? '是' : '否',
                });
            }
            this.userData = data
        },
        del(id: data['id']) {
            let userData = this.userData
            userData.splice(id, 1)
            this.userData = userData
        }
    },

})
