<template>
    <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
        color="black"
    >
        <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
            title="John Leider"
            nav
        >
            <template v-slot:append>
                <v-btn
                    variant="text"
                    icon="mdi-chevron-left"
                    @click.stop="rail = !rail"
                ></v-btn>
            </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
            <v-list-item
                prepend-icon="mdi-home-city"
                title="Home"
                value="home"
            ></v-list-item>
            <v-list-item
                prepend-icon="mdi-account"
                title="My Account"
                value="account"
            ></v-list-item>
            <v-list-group
                prepend-icon="mdi-account-group-outline"
                title="Users"
                value="Users"
            >
                <template v-slot:activator="{ props }">
                    <v-list-item
                        v-bind="props"
                        prepend-icon="mdi-account-circle"
                        title="Users"
                    >
                    </v-list-item>
                </template>
                <v-list-item
                    v-for="([title, icon], i) in users"
                    :key="i"
                    :title="title"
                    :prepend-icon="icon"
                    :value="title"
                ></v-list-item>
            </v-list-group>
        </v-list>
    </v-navigation-drawer>
</template>
<script>
export default {
    data: () => ({
        users: [
            ["Management", "mdi-account-multiple-outline"],
            ["Settings", "mdi-cog-outline"],
        ],
        cards: ["Today", "Yesterday"],
        drawer: true,
        rail: true,
    }),
};
</script>
<style lang=""></style>
